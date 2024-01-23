# React + Vite CONTEXT API

استفاده از کانتکست‌ها، ما می‌توانیم به راحتی به اطلاعات برنامه از کامپوننت‌های داخلی تا بیرونی دسترسی پیدا کنیم و همچنین از مشکل prop drilling پیشگیری کنیم

یک برنامهٔ خوب برنامه‌ای هست که تا حد مناسبی به قسمت‌های کوچیک‌تر تقسیم شده باشه. توی ری‌اکت ما برنامه‌مون رو به کمک کامپوننت‌ها به قسمت‌های کوچیک‌تر تقسیم می‌کنیم تا خوانایی و قابلیت استفاده مجدد از کدها بالاتر بره. بنابراین رایج هست که کامپوننت‌هایی داشته باشیم که خودشون از کامپوننت‌های دیگه تشکیل شدن.

```jsx
function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'Mario',
  });

  // ...
}
```

برای مطالعه بیشتر :

https://ditty.ir/posts/react-context-api/naBlX

Context API چیه؟ 🤔

با این ویژگی می‌تونیم توی برنامه متغیرهایی به صورت سراسری (Global) داشته باشیم که می‌تونن از همه جای برنامه به طور مستقیم مورد دسترسی قرار بگیرن. Context API می‌تونه یک جایگزین ساده و سبک برای State Management ها مثل Redux باشه.

```jsx
//1)CREATE A CONTEXT always be top
const PostContext = createContext();
```

```jsx
//1)Create a provider and value
<PostContext.Provider
  value={{
    posts: searchedPosts,
    onClearPosts: handleClearPosts,
    onAddPost: handleAddPost,
    searchQuery,
    setSearchQuery,
  }}
>
  <Header />
  <Main />
  <Archive />
  <Footer />
</PostContext.Provider>
```

```jsx
// Use UseContext 
function Header() {
  const { onClearPosts } = useContext(PostContext);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
```

👉 System to pass data throughout the app
without manually passing props down the tree
<br/>👉 Allows us to “broadcast” global state to theentire app


1) Provider: gives all child components
access to value
2) value: data that we want to make
available (usually state and functions)
3) Consumers: all components that read the
provided context value
