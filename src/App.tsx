import "./App.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const artRef1 = useRef(null);
  const artRef2 = useRef(null);
  const artRef3 = useRef(null);

  const [activeMenuId, setActiveMenuId] = useState(0);

  const initScrollTrigger = (section: HTMLElement | null, id: number) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 49%",
      end: "bottom bottom-=49%",
      scrub: true,
      onEnter: () => setActiveMenuId(id),
      onEnterBack: () => setActiveMenuId(id),
    });
  };

  const scrollTo = (target: HTMLElement | null) => {
    if (target) {
      gsap.to(window, { duration: 1, scrollTo: target });
    }
  };

  useEffect(() => {
    initScrollTrigger(artRef1.current, 0);
    initScrollTrigger(artRef2.current, 1);
    initScrollTrigger(artRef3.current, 2);
  }, []);

  return (
    <>
      <header>
        <button
          className={activeMenuId === 0 ? "active" : ""}
          onClick={() => scrollTo(artRef1.current)}
        >
          Some Article 1
        </button>
        <button
          className={activeMenuId === 1 ? "active" : ""}
          onClick={() => scrollTo(artRef2.current)}
        >
          Some Article 2
        </button>
        <button
          className={activeMenuId === 2 ? "active" : ""}
          onClick={() => scrollTo(artRef3.current)}
        >
          Some Article 3
        </button>
      </header>
      <section ref={artRef1}>
        <h2>Some Article 1</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
      </section>
      <section ref={artRef2}>
        <h2>Some Article 2</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempora
          possimus itaque quia, voluptas saepe modi excepturi, accusantium
          necessitatibus sequi numquam et? Nostrum similique maxime tempore
          praesentium eum blanditiis illum eius. Laborum est sed quos sequi
          officiis iusto.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
      </section>
      <section ref={artRef3}>
        <h2>Some Article 3</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
          nisi minus totam ratione voluptate aperiam, repudiandae laboriosam
          pariatur, quidem sed inventore blanditiis qui. Aliquam alias officia
          magni dolorum commodi nostrum nihil, voluptates repudiandae nobis aut,
          similique, reprehenderit consequatur. Sunt, assumenda.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
          perferendis aliquid, reiciendis saepe unde dicta voluptatem eveniet
          facere accusantium nam fugit velit ea cum distinctio! Placeat at,
          neque molestias id autem ullam culpa rem officia. Tempore quaerat ex
          fugiat amet illo ab ad rem?
        </p>
      </section>
    </>
  );
}

export default App;
