export class ImageLoader {

    dataTransfer: DataTransfer;
    loadImages = [];

    constructor() {
        this.dataTransfer = new DataTransfer();
    }

    load(event) {

        let component = this;

        if (event.target.files && event.target.files[0]) {

            for(const file of event.target.files){

                let ext = file.name.match(/\.([^\.]+)$/)[1];

                switch (ext) {
                    case 'jpg':
                    case 'jpeg':
                    case 'png':
                        break;
                    default:
                        continue;
                }

                this.dataTransfer.items.add(file);

                let reader = new FileReader();

                reader.onload = function (e){
                    component.loadImages.push(e.target.result);
                }

                reader.readAsDataURL(file); // convert to base64 string
            }

            event.target.files = this.dataTransfer.files;
        }
    }

    removeImage(event){
        this.dataTransfer.items.remove(event.target)
        event.target.remove()
    }
}