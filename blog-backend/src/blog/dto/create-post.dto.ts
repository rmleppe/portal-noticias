
//Se especifica un Data transfer object, que define como la data será enviada desde la
// app hacia la bd, serán solo strings y read-only para evitar mutaciones


export class CreatePostDTO {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string;
}