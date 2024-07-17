## Affiliate site template

### Template Starter

- Make sure to install the dependencies:

```bash
npm install
```

- Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

- Build the application for production:

```bash
npm run build
```

- Locally preview production build:

```bash
npm run preview
```

#### Environment Variables

- Copy `.env.dist` to create a new `.env` file and populate it with the necessary variable values.

---

### Configurations

#### modules

- `@nuxt/eslint`
- `@nuxt/test-utils/module`
- `@nuxt/fonts`
- `@nuxt/ui`
- `@vueuse/nuxt`
- `@nuxt/image`
- `nuxt-svgo`
- `@nuxt/content`
- `@nuxtjs/sanity`
- `nuxt-swiper`

#### icons (iconify-json)

- material-symbols

---

### CI/CD

- Format
  - Linting
  - Typechecking
- Tests
  - Unit tests (vitest)

---

### Content Hierarchy Guidelines

- Blog Post
  - H1: Title
  - H2: Excerpt
  - H3: Content Header
  - H4: Content List Title
  - Time: Date
    - Convert the timestamp to datetime and display the formatted date
    ```html
    <time datetime="2024-03-04 00:00">MONDAY, MARCH 4, 2024</time>
    ```

### Font Usage

Global Font: Montserrat
Fallback: Sans Serif

- Blog Post
  - H1: Montserrat
  - H2: Montserrat
  - H3: Playfair
  - H4: Poppins
