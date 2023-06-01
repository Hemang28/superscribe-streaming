// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";
import "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IInstantDistributionAgreementV1.sol";

contract SuperfluidStreamScheduler {
    ISuperfluid private constant host = ISuperfluid(0xEB796bdb90fFA0f28255275e16936D25d3418603);
    IConstantFlowAgreementV1 private constant cfa = IConstantFlowAgreementV1(0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873);

    struct StreamTask {
        address recipient;
        int96 flowRate;
        uint256 startTimestamp;
        uint256 endTimestamp;
    }

    mapping(uint256 => StreamTask) public tasks;
    uint256 public taskId;

    event StreamTaskScheduled(uint256 indexed taskId, address indexed recipient, int96 flowRate, uint256 startTimestamp, uint256 endTimestamp);
    event StreamTaskUpdated(uint256 indexed taskId, int96 flowRate, uint256 endTimestamp);
    event StreamTaskCancelled(uint256 indexed taskId);

    function scheduleStream(address _recipient, int96 _flowRate, uint256 _startTimestamp, uint256 _endTimestamp) external {
        require(_startTimestamp > block.timestamp, "Invalid start timestamp");

        taskId++;
        tasks[taskId] = StreamTask({
            recipient: _recipient,
            flowRate: _flowRate,
            startTimestamp: _startTimestamp,
            endTimestamp: _endTimestamp
        });

        emit StreamTaskScheduled(taskId, _recipient, _flowRate, _startTimestamp, _endTimestamp);
    }

    function updateStream(uint256 _taskId, int96 _newFlowRate, uint256 _newEndTimestamp) external {
        require(tasks[_taskId].recipient != address(0), "Task does not exist");
        require(_newEndTimestamp > block.timestamp, "Invalid new end timestamp");

        tasks[_taskId].flowRate = _newFlowRate;
        tasks[_taskId].endTimestamp = _newEndTimestamp;

        emit StreamTaskUpdated(_taskId, _newFlowRate, _newEndTimestamp);
    }

    function cancelStream(uint256 _taskId) external {
        require(tasks[_taskId].recipient != address(0), "Task does not exist");
        require(tasks[_taskId].endTimestamp > block.timestamp, "Cannot cancel task after end timestamp");

        emit StreamTaskCancelled(_taskId);
    }

    function createStream(uint256 _taskId) external {
        StreamTask memory task = tasks[_taskId];

        require(task.recipient != address(0), "Task does not exist");
        require(task.startTimestamp <= block.timestamp, "Cannot create stream before start timestamp");

        host.callAgreement(
            cfa,
            abi.encodeWithSelector(
                cfa.createFlow.selector,
                task.recipient,
                task.flowRate,
                new bytes(0)
            ),
            "0x"
        );
    }

    function updateStreamInternal(uint256 _taskId, int96 _newFlowRate) external {
        StreamTask memory task = tasks[_taskId];

        require(task.recipient != address(0), "Task does not exist");

        host.callAgreement(
            cfa,
            abi.encodeWithSelector(
                cfa.updateFlow.selector,
                task.recipient,
                _newFlowRate,
                new bytes(0)
            ),
            "0x"
        );
    }

    function cancelStreamInternal(uint256 _taskId) external {
        StreamTask memory task = tasks[_taskId];

        require(task.recipient != address(0), "Task does not exist");

        host.callAgreement(
            cfa,
            abi.encodeWithSelector(
                cfa.deleteFlow.selector,
                task.recipient,
                new bytes(0)
            ),
            "0x"
        );
    }
}
