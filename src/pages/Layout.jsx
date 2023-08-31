
import { SocialMediaBar } from "../components/SocialMediaBar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div>
            {children}
            <SocialMediaBar />
        </div>
    );
}

export default Layout;
