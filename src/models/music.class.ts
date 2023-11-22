export class Music {
    id: number;
    title: string;
    lyrics: string;
    release_date: Date;
    duration: number;


    constructor(id: number, title: string, lyrics: string, release_date: Date, duration: number) {
        this.id = id;
        this.title = title;
        this.lyrics = lyrics;
        this.release_date = release_date;
        this.duration = duration;
    }
}