import "../../../css/chat/messages/pandingMessage.css";

import Text from "../../../components/Text/Text";

const PandingMessage = ({ color }) => {
  return (
    <div className="panding-message" style={{ "--color": `${color}19` }}>
      <Text weight={600} lineHeight="22px">
        Наш продавец уже увидел ваше сообщение
      </Text>
      <Text marginTop="10px" lineHeight="22px">
        В течение 2 минут он свяжется с вами!
      </Text>
    </div>
  );
};

export default PandingMessage;
