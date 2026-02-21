import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, href, onClick, className = '', ...props }) => {
    const btnClass = `btn btn-${variant} ${className}`;

    if (to) {
        return <Link to={to} className={btnClass} {...props}>{children}</Link>;
    }

    if (href) {
        return <a href={href} className={btnClass} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
    }

    return (
        <button className={btnClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
