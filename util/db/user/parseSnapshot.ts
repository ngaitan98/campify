
import { DataSnapshot } from "firebase-admin/database";
import User from "../../types/user";

export default async function(snaphot: DataSnapshot): Promise<User>{
    let parsedData: User = {
        songs: [],
        metadata: undefined
    }
    parsedData.metadata = snaphot.child("metadata").val();
    snaphot.child("songs").forEach( child =>{
        parsedData.songs.push(child.val());
    });
    return parsedData;
}