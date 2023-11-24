export class Music {
    id: number;
    title: string;
    lyrics: string;
    release_date: Date;
    duration: string;
    category_id: number;
    author_id: number;


    constructor(id: number, title: string, lyrics: string, release_date: Date, duration: string, category_id: number, author_id: number) {
        this.id = id;
        this.title = title;
        this.lyrics = lyrics;
        this.release_date = release_date;
        this.duration = duration;
        this.category_id = category_id;
        this.author_id = author_id;
    }
}