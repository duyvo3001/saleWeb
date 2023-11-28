export declare class ResponseData<D> {
    data: D;
    statusCode: number;
    message: string;
    constructor(data: D, statusCode: number, message: string);
}
