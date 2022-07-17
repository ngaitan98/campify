import Metadata from "../metadata";
import Song from "../song";

export default interface User{
    metadata?: Metadata;
    songs: Song[]
}