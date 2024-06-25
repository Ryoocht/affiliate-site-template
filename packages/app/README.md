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

- `@nuxt/content`
- `@nuxt/eslint`
- `@nuxt/test-utils/module`
- `@nuxt/fonts`
- `@nuxt/ui`
- `@nuxtjs/sanity`
- `@portabletext/vue`
- `@sanity/image-url`
- `@vueuse/nuxt`
- `@nuxt/image`
- `defu`
- `nuxt-svgo`
- `tailwind-merge`

#### tailwind plugins

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

- Title: H1
- Excerpt: H2
- Content Header: H3
- Date: Time
  - Convert the timestamp to datetime and display the formatted date
  ```html
  <time datetime="2024-03-04 00:00">MONDAY, MARCH 4, 2024</time>
  ```
