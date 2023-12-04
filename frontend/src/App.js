import './App.css'; // Import your styles if needed

// Import your components
import Home from './components/Home';
import RestaurantList from './components/Restaurant/RestaurantList';
import OrderForm from './components/Order/OrderForm';
import UserProfile from './components/User/UserProfile';

function App() {
  // You can use state and useEffect for global data fetching or other purposes
  // For example, fetching user data on app load
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data or perform any other initial setup
    // setUser(result);
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurants" component={RestaurantList} />
          <Route path="/order" component={OrderForm} />
          <Route path="/profile" component={UserProfile} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
