import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

class Messages {
    private _id?: string;
    private _name: string;
    private _text: string;
    private _createdAt: Date;

    constructor(name: string, text: string, createdAt: Date) {
        this._name = name;
        this._name = name;
        this._text = text;
        this._createdAt = createdAt;
    }

    public getName() {
        return this._name;
    }
    public getText() {
        return this._text;
    }
    public getCreatedAt() {
        return this._createdAt;
    }

    public getId() {
        return this._id;
    }
}
export default Messages;

export const messagesConverter = {

    toFirestore: function(message: Messages) {
        return {
            id: message.getId(),
            name: message.getName(),
            text: message.getText(),
            createdAt: message.getCreatedAt()
        }
    },

    fromFirestore: (snapshot: DocumentSnapshot, option: SnapshotOptions) => {
        const data = snapshot.data(option);
        if (data) 
            return new Messages(data.name, data.text, data.createdAt.toDate());
    }
}