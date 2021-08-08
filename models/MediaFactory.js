import Image from "./Image.js";
import Video from "./Video.js";

class MediaFactory {

    build(item) {
        if (item.hasOwnProperty('image')) {
            return new Image(item)
        } else if (item.hasOwnProperty('video')) {
            return new Video(item)
        }
    }
}

export default MediaFactory;