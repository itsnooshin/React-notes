import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

function createRandomUser() {
  return {
    title: faker.hacker.adjective(),
    body: faker.hacker.phrase(),
  };
}
function initalState() {
  return Array.from({ length: 40 }, () => createRandomUser());
}

function App() {
  const [post, setPost] = useState(initalState);
  const [isFakeDark, setIsFakeDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  function clearPost() {
    setPost([]);
  }
  function handleAddPost(post) {
    setPost((posts) => [post, ...posts]);
  }
  
  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? post.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : post;

  // add dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('fake-dark-mode');
  }, [isFakeDark]);

  return (
    <section>
      <button
        className="btn-fake-dark-mode"
        onClick={() => setIsFakeDark((is) => !is)}
      >
        {isFakeDark ? 'light' : 'dark'}
      </button>
      <Header
        post={searchedPosts}
        onClear={clearPost}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main post={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
  );
}

function Header({ post, onClear, searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>
        {' '}
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Result post={post} />
        <input
          type="text"
          placeholder="Search Posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={onClear}>Clear Post</button>
      </div>
    </header>
  );
}
function Main({ post, onAddPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitFunction(e) {
    e.preventDefault();
    if (!title || !body) return;
    onAddPost({ title, body });
    setBody('');
    setTitle('');
  }
  return (
    <main>
      <form onSubmit={submitFunction}>
        <input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          placeholder="Post Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button>Add Post</button>
      </form>
      <section>
        <ul>
          {post.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}

function Post({ post }) {
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
}

function anotherArchive() {
  return Array.from({ length: 1000 }, () => createRandomUser());
}
function Archive({ onAddPost }) {
  const [archive, setArchive] = useState(anotherArchive);
  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>POST ARCHIVE</h2>
      <button onClick={() => setShowArchive((isopen) => !isopen)}>
        {showArchive ? 'Hide Archive Post' : 'Show Archive Post'}
      </button>
      {showArchive ? (
        <ArchivePost onAddPost={onAddPost} archive={archive} />
      ) : null}
    </aside>
  );
}

function ArchivePost({ archive, onAddPost }) {
  return (
    <ul>
      {archive.map((archive) => (
        <>
          <li>
            <p>
              <strong>{archive.title}:</strong>
              {archive.body}
            </p>
            <button onClick={() => onAddPost(archive)}>add new post</button>
          </li>
        </>
      ))}
    </ul>
  );
}

function Footer() {
  return <p>© by The Atomic Blog ✌️</p>;
}

function Result({ post }) {
  return <p>{post.length} atomic posts found</p>;
}
export default App;
