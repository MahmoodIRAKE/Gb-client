// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const Profiles = {
    id: 'Profiles',
    title: 'Profiles',
    type: 'group',
    children: [
        {
            id: 'studentProfile',
            title: 'Student Profile',
            type: 'item',
            url: '/studentProfile',
            icon: icons.ProfileOutlined
        }
    ]
};

export default Profiles;
