import Image from "next/image";
import { logo } from "../../utils/helpingHand"

const HeaderLogo = () => {
    return (
      <div>
        <Image
          src={logo}
          alt="NBChattenzi"
          width={224}
          height={32}
          className="min-w-[100px] w-[140px] sm:w-[224px]"
        />
      </div>
    );
}
 
export default HeaderLogo;