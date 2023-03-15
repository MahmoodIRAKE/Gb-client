// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const newMembers = {
    id: 'newAppliance',
    title: 'New Appliance',
    type: 'group',
    children: [
        {
            id: 'NewMembersRegistration',
            title: 'Register New Members',
            type: 'item',
            url: '/NewMembersRegistration',
            icon: icons.ProfileOutlined
        }
    ]
};

export default newMembers;
