export default class Download {
    constructor(triggers){
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg'
    }


    downloadItem(path){

    }

    init(){
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadItem(this.path);
            })
        })
    }
}