const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/perfData', { useNewUrlParser: true, useUnifiedTopology: true });

const Machine = require("./models/Machine");


function socketMain(io, socket) {
    console.log("Socket connected with ID: ", socket.id);

    socket.on('clientAuth', key => {
        if (key === 'alsdjfhaklsdjfh237845239q') {
            socket.join('clients');
        }
        else if (key === 'askgjhasdfil935871893') {
            socket.join('ui');
        }
        else {
            //an invalid client has joined. GoodBye
            socket.disconnect(true);
        }
    })

    //if machine is new, add it to the database
    socket.on('initPerfData', async data => {
        // console.log(data);
        checkAndAdd(data);
        const mongooseResponse = await checkAndAdd(data);
        console.log(mongooseResponse);
    })


    socket.on('perfData', data => {
        // console.log(data);
    })

}

function checkAndAdd(data) {
    return new Promise((resolve, reject) => {
        Machine.findOne({ macA: data.macA }, (err, doc) => {
            if (err) {
                throw err;
                reject(err);
            }
            else if (doc === null) {
                //the record of this machine is not in the db, so add it!;
                let newMachine = new Machine(data);
                newMachine.save();
                resolve('added');
            }
            else {
                resolve('found');
            }
        })
    })
}

module.exports = socketMain;