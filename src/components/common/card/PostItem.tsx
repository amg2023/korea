import * as S from "./style";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import { IPostItem } from "./type";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { GradientText } from "../text/Text";

export default function PostItem({ post }: IPostItem) {
  return (
    <Link to={`/post/${post.id}`}>
      <S.PostItem>
        <img src={post.images}></img>
        <div className="title">
          <GradientText className="postitem-title">{post.title}</GradientText>
          <p className="postitem-summary">
            {post.summary.slice(0, 30) + "..."}
          </p>
        </div>
        <div className="under-left">
          <AiOutlineMessage className="under-item" />
          <p className="under-text">{post.commentcount}</p>
          <AiFillEye className="under-item" />
          <p className="under-text">{post.viewcount}</p>
        </div>
        <div className="under-right">
          <Avatar
            width={"3rem"}
            height={"3rem"}
            imageUrl={post.user.imageUrl}
          />
        </div>
      </S.PostItem>
    </Link>
  );
}
