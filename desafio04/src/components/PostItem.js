import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Header({ post }){
  return (
    <>
      <div className="d-flex justify-content-left">
        <div className="avatar" src={post.author.avatar}></div>
        <div style={{ display: 'grid' }}>
          <span>{post.author.name}</span>
          <small style={{ color: '#b6bbbb' }} >{post.date}</small>
        </div>
      </div>

      <br />
      <p>{post.content}</p>
      <hr />
    </>
  )
}

function Comments({ comments }){
  return (
    <>
      {/* <div className="d-flex justify-content-between"> */}
      <Row>
        <Col xs="1">
        <span><div className="avatar" src={comments.author.avatar}></div></span>
        </Col>
        <Col xs="11">
        <div className="comment-content">
          <div style={{padding: '10px'}}>
            <p><strong>{comments.author.name}: </strong>{comments.content}
            </p>
          </div>
        </div>
        </Col>
      </Row>
        

      {/* </div> */}
    </>
  )
}

function PostItem({ post }){
  return (
    <Container style={{margin: '25px auto 0', background: '#E9EBEE'}}>
      {/* <div className="row justify-content-md-center"> */}
        <div className="col-sm box-card">
          <Header post={post}/>
          <div>
            {post.comments.map(comment => (
              <Comments key={comment.id} comments={comment}/>
            ))}
          </div>
        </div>
      {/* </div> */}
    </Container>
  )
}

export default PostItem