import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
    senderName: {
        type: String,
        minLength: [2, "Name must contain atleast 2 characters."],
    },
    subject: {
        type: String,
        minLength: [2, "Subject must contain atleast 2 characters."],
    },
    message: {
        type: String,
        minLength: [2, "Message must contain atleast 2 characters."],
    },
    createdAt: {
        type: Date,
        minLength: Date.now(),
    },
    
});

export const Message = mongoose.model("Message", msgSchema);