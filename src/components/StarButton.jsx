import { useContext } from 'react';
import { FavsContext } from '../App';

export default function StarButton({ id, className = '' }) {
  const { favs, toggle } = useContext(FavsContext);
  const starred = favs.has(id);
  return (
    <button
      className={`star-btn ${starred ? 'star-btn--on' : ''} ${className}`}
      onClick={e => { e.stopPropagation(); toggle(id); }}
      title={starred ? 'Remove from favourites' : 'Add to favourites'}
    >
      {starred ? '★' : '☆'}
    </button>
  );
}
