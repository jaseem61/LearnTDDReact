export default function MessageList(props) {
  const messageList = props.messages.map((message) => {
    return (
      <div>
        <p key={message}>{message}</p>
      </div>
    );
  });
  console.log(messageList);
  return messageList;
}
