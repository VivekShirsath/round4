
export const CommentCard = ({comment,username}) => {
    return(
        <div className="flex gap-3">
            <div>
                <img src={comment.picUrl} className="w-12"/>
            </div>
            <div className="flex flex-col gap-3 p-4">
           <div className="flex gap-2">
            <h3 className="font-semibold">{comment.name}</h3>
             <h3> @{comment.username}</h3>
             <h4>{comment.createdAt}</h4>
           </div>
           <div>
            <p>Replying to <span className="text-blue-700">@{username}</span></p>
           </div>
           <p>{comment.comment}</p>
        </div>
        </div>
    )
}