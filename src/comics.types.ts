export interface DBComic {
    comic_id: number;
    num: number;
    month: string ;
    link: string | null;
    year: string;
    news: string | null;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    extra_parts: string | null;
    favorites: number;
}

export interface Comic {
    num: number;
    month: string ;
    link: string | null;
    year: string;
    news: string | null;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    extra_parts?: string | null;
}