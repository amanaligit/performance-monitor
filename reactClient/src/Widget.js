import React from 'react'
import Cpu from './Cpu'
import Info from './Info'
import Mem from './Mem'
import './widget.css'

function Widget(props) {

    const { osType,
        upTime,
        freeMem,
        totalMem,
        usedMem,
        memUsage,
        cpuModel,
        numCores,
        cpuLoad,
        cpuSpeed,
        macA,
        isActive } = props.data;

    let notActiveDiv = '';
    if (!isActive) {
        notActiveDiv =
            <div className="not-active">
                OFFLINE
            </div>
    }

    const cpuWidgetId = `cpu-widget-${macA}`;
    const memWidgetId = `mem-widget-${macA}`;

    return (
        <>
            <div className="widget col-sm-12">
                {notActiveDiv}
                <Cpu cpuData={{ cpuLoad, cpuWidgetId }} />
                <Mem memData={{ totalMem, usedMem, freeMem, memUsage, memWidgetId }} />
                <Info infoData={{ macA, osType, upTime, cpuModel, numCores, cpuSpeed }} />
            </div>
        </>
    )
}

export default Widget
