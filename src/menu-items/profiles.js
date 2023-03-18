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
            id: 'studentProfiles',
            title: 'Students Profiles',
            type: 'item',
            url: '/studentProfiles',
            icon: icons.ProfileOutlined
        },
        {
            id: 'teacherProfiles',
            title: 'Teachers Profiles',
            type: 'item',
            url: '/teacherProfiles',
            icon: icons.ProfileOutlined
        },
        {
            id: 'student',
            title: 'student',
            type: 'item',
            url: '/student',
            icon: icons.ProfileOutlined
        }
    ]
};

export default Profiles;
