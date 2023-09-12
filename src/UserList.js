import React, {useEffect} from "react";


// React.memo : props가 변경이 될때만 리렌더링 수행함
const User = React.memo(function User({user, onRemove, onToggle}){
    useEffect(()=>{
        console.log(user)
    },[user])
    return(
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick={()=> onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button 
            onClick={() => onRemove(user.id)}
            >삭제</button>
        </div>
    )
})

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {users.map(user => (
                <User 
                user={user} 
                key= {user.id} 
                onRemove={onRemove}
                onToggle={onToggle}

                />
            ))}
        </div>
    )
}

export default React.memo(UserList)