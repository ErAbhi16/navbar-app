import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Root(props) {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <Link to="/" class="navbar-brand" >NAGP</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/admin" class="nav-link" >Admin</Link>
            </li>
            <li class="nav-item">
              <Link to="/product" class="nav-link">Product</Link>
            </li>
          </ul>
          <span class="navbar-text me-3 fs-5">
            <i class="bi bi-cart2"></i>
          </span>
        </div>
      </nav>\
    </Router>
  );
}
