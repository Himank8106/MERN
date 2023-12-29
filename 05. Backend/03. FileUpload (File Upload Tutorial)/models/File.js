const mongoose = require("mongoose");
const nodemailer = require('../config/nodemailer');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    }
});

// post middleware
fileSchema.post("save", async function (doc){
    try {
        console.log("doc - ",doc)

        // transporter
        const transporter = nodemailer.connect();

        // send mail
        let info = await transporter.sendMail({
            from: 'Himank - FileUpload',
            to: doc.email,
            subject: "New File Uploaded Successfully on Cloudinary from Bhupendra Jogi",
            html: `<h2>Hello ${doc.name} </h2> 
            <p>File has been successfully Uploaded </p>
            <p>View here: <a href="${doc.url}">${doc.url}</a></p>
            `,
        })

        console.log("INFO - ", info)

    } catch (error) {
        console.error(error);
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;