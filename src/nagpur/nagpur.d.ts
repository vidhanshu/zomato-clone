export declare namespace NSNagpur{
    interface IRestaurant {
        id: string;
        name: string;
        desc: string;
        image: string;
        location:string;
        distance:number;
        rating:number;
        price: string;
        offer?: string;
    }
    interface IReview {
        id: string;
        name: string;
        rating: number;
        comment: string;
    }
}