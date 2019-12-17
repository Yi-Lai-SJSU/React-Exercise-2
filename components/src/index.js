import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    const names = ["Sam", "Alex", "Jane"];
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails 
                    author={names[0]} 
                    timeAgo= "Today at 4:45PM" 
                    content="Nice blog"
                    avatar={faker.image.avatar()}
                />     
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails 
                    author={names[1]} 
                    timeAgo= "Today at 2:45PM" 
                    content="I love it"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetails 
                    author={names[2]} 
                    timeAgo= "Today at 1:45PM" 
                    content="I like it"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
