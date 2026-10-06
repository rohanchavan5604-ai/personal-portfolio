import { Github, Linkedin, Code2, Mail } from 'lucide-react';
import { social } from '../data/site.js';

const items = [
  { label: 'GitHub', href: social.github, Icon: Github },
  { label: 'LinkedIn', href: social.linkedin, Icon: Linkedin },
  { label: 'LeetCode', href: social.leetcode, Icon: Code2 },
  { label: 'Email', href: social.email, Icon: Mail },
];

export default function SocialLinks({ withLabels = false }) {
  return (
    <ul className={`social${withLabels ? ' labelled' : ''}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} aria-label={label} title={label} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <Icon size={18} aria-hidden="true" />{withLabels && <span>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
