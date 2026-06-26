import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'Lenovo Ideapad Slim 5 (i5 13420H, 16GB, 512GB)',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'Logitech Wireless Mouse',
    icon: <Mouse className="size-4" />,
  },
];

export const webExtensions = [
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'Redux DevTools', href: 'https://chrome.google.com/webstore/detail/redux-devtools' },
  { name: 'JSON Viewer', href: 'https://chrome.google.com/webstore/detail/json-viewer' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  { name: 'Lighthouse', href: 'https://developers.google.com/web/tools/lighthouse' },
];

export const software = [
  { name: 'Brave', href: 'https://brave.com/' },
  { name: 'VS Code', href: 'https://code.visualstudio.com/' },
  { name: 'Antigravity IDE', href: '#' },
  { name: 'Notion', href: 'https://www.notion.so/' },
  { name: 'VLC', href: 'https://www.videolan.org/vlc/' },
];
