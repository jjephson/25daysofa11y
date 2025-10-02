# 25 Days of A11y

A 25-day journey to learn and practice web accessibility (a11y). Each day, we'll explore different aspects of making the web more accessible to everyone, including people with disabilities.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Project Structure

```
├── src/
│   ├── layouts/     # Layout components
│   ├── pages/       # Pages (file-based routing)
│   └── components/  # Reusable components
├── public/          # Static assets
└── astro.config.mjs # Astro configuration
```

## Accessibility Focus

This project is built with accessibility in mind from the ground up:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast design
- Focus management

## Technologies Used

- [Astro](https://astro.build/) - Static site generator
- TypeScript - Type safety
- Modern CSS - Responsive design

## Contributing

Feel free to contribute to this project by:
- Adding more accessibility examples
- Improving existing content
- Fixing accessibility issues
- Adding new features

## License

MIT License
