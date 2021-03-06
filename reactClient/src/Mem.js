import React from 'react'
import drawCircle from './utilities/canvasLoadAnimation'


function Mem(props) {
    const { totalMem, freeMem, memUsage, memWidgetId } = props.memData;
    const canvas = document.getElementById(`${memWidgetId}`);
    drawCircle(canvas, memUsage * 100);
    return (
        <>
            <div className="col-sm-3 mem">
                <h3>
                    Memory Usage
                </h3>
                <div className="canvas-wrapper">
                    <canvas id={memWidgetId} width='200' height='200'></canvas>
                    <div className="mem-text">
                        {Math.floor(memUsage * 100)}%
                    </div>
                </div>
                <div>
                    Total Memory: {Math.floor(totalMem / 1073741824 * 100) / 100}GB
                </div>
                <div>
                    Free Memory: {Math.floor(freeMem / 1073741824 * 100) / 100}GB
                </div>


            </div>
        </>
    )
}

export default Mem
