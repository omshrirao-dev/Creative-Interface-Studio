import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Compass,
  Instagram,
  MapPin,
  Menu,
  MoveUpRight,
  Phone,
  Plus,
  Ruler,
  Sparkles,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.title = 'Delight Interior Furniture — Furniture & Interiors, Nagpur';
    const description = 'Premium furniture and thoughtful interior design from Delight Interior Furniture in Nagpur.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    const scriptId = 'delight-local-business-schema';
    document.getElementById(scriptId)?.remove();
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FurnitureStore',
      name: 'Delight Interior Furniture',
      telephone: '+91 97242 18985',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 37, Opp. Bansi Nagar Metro Station, Hingna MIDC Road, Hingana Road',
        addressLocality: 'Nagpur',
        postalCode: '440016',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      url: window.location.origin,
      sameAs: ['https://wa.me/919724218985'],
    });
    document.head.appendChild(script);
    return () => document.getElementById(scriptId)?.remove();
  }, []);

  const navItems = [
    ['Collection', '#collection'],
    ['Interiors', '#interiors'],
    ['Our approach', '#approach'],
    ['Visit us', '#visit'],
  ];

  return (
    <main className="grain min-h-[100dvh] overflow-x-hidden bg-background">
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'border-b border-border bg-background/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" data-testid="link-logo" className="focus-ring flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-accent text-accent">
              <span className="display-face text-2xl italic leading-none">d</span>
            </span>
            <span className="hidden text-[12px] font-semibold uppercase tracking-[.18em] text-foreground sm:block">Delight<br /><span className="font-normal tracking-[.28em] text-muted-foreground">Interior Furniture</span></span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`} className="focus-ring eyebrow text-muted-foreground transition-colors hover:text-foreground">{label}</a>
            ))}
          </nav>
          <a href="tel:+919724218985" data-testid="link-call-header" className="focus-ring hidden items-center gap-2 text-[12px] font-semibold uppercase tracking-[.14em] text-foreground lg:flex">
            <Phone size={14} strokeWidth={1.5} /> Call showroom
          </a>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu" className="focus-ring grid h-10 w-10 place-items-center border border-border md:hidden">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 md:hidden">
            <div className="flex flex-col">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`} className="border-b border-border py-4 text-sm uppercase tracking-[.16em] text-foreground">{label}</a>
              ))}
              <a href="tel:+919724218985" data-testid="link-mobile-call" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[.14em] text-accent"><Phone size={15} /> +91 97242 18985</a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative min-h-[760px] bg-[#2d211b] text-[#f3eee5]">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Warm contemporary living room with sculptural furniture" className="h-full w-full object-cover opacity-65 animate-image" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,19,14,.9)_0%,rgba(28,19,14,.58)_44%,rgba(28,19,14,.2)_100%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[760px] max-w-[1400px] items-end px-5 pb-16 pt-36 md:px-10 md:pb-20 lg:pb-24">
          <div className="max-w-[830px]">
            <div className="animate-rise eyebrow mb-7 text-[#c9a96a]" style={{ animationDelay: '100ms' }}>Furniture · Interiors · Nagpur</div>
            <h1 className="animate-rise max-w-[800px] text-[clamp(3.8rem,10vw,9rem)] leading-[.84] tracking-[-.045em] text-[#f5efe4]" style={{ animationDelay: '200ms' }}>
              Make space<br /><em className="display-face font-normal">for living.</em>
            </h1>
            <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:gap-12">
              <p className="animate-rise max-w-[310px] text-[15px] leading-7 text-[#e3d8ca]" style={{ animationDelay: '360ms' }}>Furniture with a point of view. Interiors designed around the way you actually live.</p>
              <a href="#collection" data-testid="link-explore-collection" className="animate-rise focus-ring group inline-flex w-fit items-center gap-4 border-b border-[#c9a96a] pb-3 text-xs font-semibold uppercase tracking-[.18em] text-[#f5efe4]" style={{ animationDelay: '460ms' }}>Explore the collection <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
            </div>
          </div>
          <div className="absolute bottom-9 right-10 hidden items-center gap-3 text-[#c9a96a] lg:flex">
            <span className="eyebrow">Scroll to discover</span><span className="h-px w-14 bg-[#c9a96a]" />
          </div>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <p className="eyebrow text-accent">A considered home begins here</p>
          <div>
            <p className="display-face max-w-[780px] text-[clamp(2.5rem,5.4vw,5.4rem)] leading-[.94] tracking-[-.025em] text-foreground">The most memorable rooms are not filled. <em>They are edited.</em></p>
            <p className="mt-9 max-w-[530px] text-sm leading-7 text-muted-foreground">At Delight, we bring together pieces that hold a room quietly — considered proportions, honest materials and the small details that make a space feel entirely yours.</p>
          </div>
        </div>
      </section>

      <section id="collection" className="bg-background px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-5">
            <div><span className="eyebrow text-accent">01 / The collection</span><h2 className="display-face mt-3 text-4xl md:text-6xl">Pieces with presence.</h2></div>
            <a href="#visit" data-testid="link-collection-visit" className="focus-ring hidden items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] md:flex">See it in person <ArrowRight size={15} /></a>
          </div>
          <div className="grid gap-10 md:grid-cols-12 md:gap-5">
            <article className="group md:col-span-7">
              <div className="image-wrap aspect-[1.2/1] bg-muted"><img loading="lazy" src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Solid wood dining table beside a light-filled window" className="h-full w-full object-cover" /></div>
              <div className="mt-5 flex justify-between gap-5"><div><h3 className="text-lg">Dining & gathering</h3><p className="mt-1 text-sm text-muted-foreground">A reason to stay a little longer.</p></div><ArrowUpRight size={18} className="text-accent" /></div>
            </article>
            <div className="flex flex-col gap-12 md:col-span-5 md:pt-28">
              <article className="group">
                <div className="image-wrap aspect-[1.08/1] bg-muted"><img loading="lazy" src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Textured armchair in a calm neutral interior" className="h-full w-full object-cover" /></div>
                <div className="mt-5 flex justify-between gap-5"><div><h3 className="text-lg">The softer side</h3><p className="mt-1 text-sm text-muted-foreground">Lounge, linger, let go.</p></div><ArrowUpRight size={18} className="text-accent" /></div>
              </article>
              <article className="group md:ml-20">
                <div className="image-wrap aspect-[1.2/1] bg-muted"><img loading="lazy" src="https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Minimal bedroom with warm wooden bedside furniture" className="h-full w-full object-cover" /></div>
                <div className="mt-5 flex justify-between gap-5"><div><h3 className="text-lg">Rest, refined</h3><p className="mt-1 text-sm text-muted-foreground">Quiet forms for slower mornings.</p></div><ArrowUpRight size={18} className="text-accent" /></div>
              </article>
            </div>
          </div>
          <div className="mt-16 grid border-t border-border pt-8 sm:grid-cols-3">
            {['Living / Rooms to settle into', 'Dining / Made for gathering', 'Bedroom / A softer landing'].map((item, index) => (
              <div key={item} className="flex items-center justify-between border-b border-border py-4 text-sm sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"><span><span className="mono-face mr-3 text-[10px] text-accent">0{index + 1}</span>{item}</span><Plus size={15} className="text-accent" /></div>
            ))}
          </div>
        </div>
      </section>

      <section id="interiors" className="bg-[#e4d8c8] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:pt-10"><span className="eyebrow text-accent">02 / Interior inspiration</span><h2 className="display-face mt-5 text-[clamp(3rem,6vw,6.5rem)] leading-[.87]">Rooms that<br /><em>feel like you.</em></h2><p className="mt-9 max-w-[370px] text-sm leading-7 text-muted-foreground">From a single corner to a complete home, we help you find the balance between how a room looks and how it lives.</p><a href="#approach" data-testid="link-discover-approach" className="focus-ring mt-9 inline-flex items-center gap-3 border-b border-foreground pb-3 text-xs font-semibold uppercase tracking-[.16em]">Discover our approach <ArrowRight size={15} /></a></div>
          <div className="image-wrap md:col-span-7 md:ml-10"><img loading="lazy" src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Layered living room interior with warm wood and natural textures" className="aspect-[.92/1] h-full w-full object-cover md:aspect-[1.05/1]" /></div>
        </div>
      </section>

      <section id="approach" className="bg-[#2d211b] px-5 py-20 text-[#f3eee5] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8"><div className="md:col-span-4"><span className="eyebrow text-[#c9a96a]">03 / The Delight way</span><h2 className="display-face mt-5 text-5xl leading-[.9] md:text-7xl">Less noise.<br /><em>More you.</em></h2></div><p className="max-w-[450px] text-sm leading-7 text-[#d4c8ba] md:col-span-5 md:col-start-8 md:pt-12">Good design should not announce itself. It should make mornings easier, evenings longer and every object in the room feel like it belongs.</p></div>
          <div className="mt-20 grid border-t border-[#5a4636] md:grid-cols-4">
            {[
              ['01', 'Listen first', 'Your rituals, your light, your way of moving through a home.'],
              ['02', 'Find the feeling', 'Materials and forms that make the room feel like its best self.'],
              ['03', 'Bring it together', 'A clear point of view, carried through every considered detail.'],
              ['04', 'Live with it', 'Spaces that age beautifully because they were made for real life.'],
            ].map(([number, title, copy]) => <div key={number} className="border-b border-[#5a4636] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><span className="mono-face text-[10px] text-[#c9a96a]">{number}</span><h3 className="mt-12 text-lg">{title}</h3><p className="mt-3 max-w-[210px] text-sm leading-6 text-[#b9aa9b]">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex items-end justify-between"><div><span className="eyebrow text-accent">04 / Why Delight</span><h2 className="display-face mt-4 text-5xl md:text-7xl">Details matter.</h2></div><Sparkles size={28} strokeWidth={1} className="hidden text-accent md:block" /></div>
          <div className="grid border-y border-border md:grid-cols-3">
            {[
              ['Material honesty', 'A tactile edit of timber, linen, cane, stone and finishes that get better with time.', Ruler],
              ['A local eye', 'Thoughtful design, close to home — with a showroom in Nagpur made for taking your time.', MapPin],
              ['Made to fit', 'A considered conversation about scale, comfort and the life a piece will live with you.', Compass],
            ].map(([title, copy, Icon]) => <article key={title as string} className="border-b border-border py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><Icon size={22} strokeWidth={1.25} className="text-accent" /><h3 className="mt-14 text-xl">{title as string}</h3><p className="mt-4 max-w-[290px] text-sm leading-7 text-muted-foreground">{copy as string}</p></article>)}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#eee7dc] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5"><span className="eyebrow text-accent">05 / Come by</span><h2 className="display-face mt-5 text-[clamp(3rem,6vw,6.2rem)] leading-[.88]">See the<br /><em>difference.</em></h2><p className="mt-9 max-w-[340px] text-sm leading-7 text-muted-foreground">Take your time with the textures, the proportions and the pieces you have been imagining at home.</p><div className="mt-10 space-y-5 text-sm"><div className="flex gap-4"><MapPin size={18} className="mt-1 shrink-0 text-accent" /><p>Shop No. 37, Opp. Bansi Nagar Metro Station,<br />Hingna MIDC Road, Hingana Road,<br />Nagpur – 440016, Maharashtra, India</p></div><div className="flex gap-4"><Phone size={18} className="mt-1 shrink-0 text-accent" /><a href="tel:+919724218985" data-testid="link-call-visit" className="focus-ring hover:text-accent">+91 97242 18985</a></div></div><a href="https://www.google.com/maps/search/?api=1&query=Shop+No.+37%2C+Opp.+Bansi+Nagar+Metro+Station%2C+Hingna+MIDC+Road%2C+Nagpur+440016" target="_blank" rel="noreferrer" data-testid="link-directions" className="focus-ring mt-9 inline-flex items-center gap-3 border-b border-foreground pb-3 text-xs font-semibold uppercase tracking-[.16em]">Get directions <MoveUpRight size={15} /></a></div>
          <div className="md:col-span-7 md:pt-16"><div className="image-wrap"><img loading="lazy" src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1600" alt="Quiet showroom-like interior with a sculptural chair and warm light" className="aspect-[1.2/1] h-full w-full object-cover" /></div><div className="mt-5 flex items-center justify-between"><span className="eyebrow text-muted-foreground">Opp. Bansi Nagar Metro Station</span><a href="https://wa.me/919724218985" target="_blank" rel="noreferrer" data-testid="link-whatsapp-visit" className="focus-ring inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-accent">WhatsApp us <ArrowRight size={15} /></a></div></div>
        </div>
      </section>

      <section className="bg-[#c7a66b] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 md:flex-row md:items-end">
          <div><span className="eyebrow text-[#46321f]">Start a conversation</span><h2 className="display-face mt-5 max-w-[800px] text-[clamp(3.3rem,8vw,8rem)] leading-[.84] tracking-[-.04em] text-[#2d211b]">Let’s make<br /><em>room.</em></h2></div>
          <div className="max-w-[280px]"><p className="text-sm leading-7 text-[#46321f]">Have a room in mind? Tell us what you are looking for, or simply come and see what catches your eye.</p><a href="https://wa.me/919724218985" target="_blank" rel="noreferrer" data-testid="link-whatsapp-cta" className="focus-ring mt-7 inline-flex items-center gap-3 border-b border-[#2d211b] pb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#2d211b]">Talk on WhatsApp <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <footer className="bg-[#2d211b] px-5 pb-24 pt-16 text-[#f3eee5] md:px-10 md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 border-b border-[#5a4636] pb-14 md:grid-cols-12">
            <div className="md:col-span-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center border border-[#c9a96a] text-[#c9a96a]"><span className="display-face text-2xl italic">d</span></span><span className="text-[12px] font-semibold uppercase tracking-[.18em]">Delight<br /><span className="font-normal tracking-[.28em] text-[#b9aa9b]">Interior Furniture</span></span></div><p className="mt-8 max-w-[300px] text-sm leading-7 text-[#b9aa9b]">Premium furniture and thoughtful interiors, from our showroom in Nagpur.</p></div>
            <div className="md:col-span-3"><span className="eyebrow text-[#c9a96a]">Explore</span><div className="mt-5 flex flex-col gap-3 text-sm text-[#e3d8ca]"><a href="#collection" data-testid="link-footer-collection" className="focus-ring w-fit hover:text-[#c9a96a]">Collection</a><a href="#interiors" data-testid="link-footer-interiors" className="focus-ring w-fit hover:text-[#c9a96a]">Interiors</a><a href="#visit" data-testid="link-footer-visit" className="focus-ring w-fit hover:text-[#c9a96a]">Visit the showroom</a></div></div>
            <div className="md:col-span-4"><span className="eyebrow text-[#c9a96a]">Find us</span><p className="mt-5 text-sm leading-7 text-[#e3d8ca]">Shop No. 37, Opp. Bansi Nagar Metro Station,<br />Hingna MIDC Road, Hingana Road,<br />Nagpur – 440016, Maharashtra</p><div className="mt-5 flex items-center gap-5"><a href="tel:+919724218985" data-testid="link-footer-phone" className="focus-ring text-sm hover:text-[#c9a96a]">+91 97242 18985</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="link-instagram" className="focus-ring text-[#c9a96a]"><Instagram size={17} /></a></div></div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-6 text-[10px] uppercase tracking-[.14em] text-[#8f7e6f] md:flex-row"><span>© {new Date().getFullYear()} Delight Interior Furniture</span><span>Furniture · Interiors · Nagpur</span></div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-[#5a4636] bg-[#2d211b] md:hidden">
        <a href="tel:+919724218985" data-testid="link-mobile-bar-call" className="flex items-center justify-center gap-2 border-r border-[#5a4636] py-4 text-[11px] font-semibold uppercase tracking-[.14em] text-[#f3eee5]"><Phone size={15} className="text-[#c9a96a]" /> Call</a>
        <a href="https://wa.me/919724218985" target="_blank" rel="noreferrer" data-testid="link-mobile-bar-whatsapp" className="flex items-center justify-center gap-2 py-4 text-[11px] font-semibold uppercase tracking-[.14em] text-[#f3eee5]"><span className="h-2 w-2 bg-[#c9a96a]" /> WhatsApp</a>
      </div>
    </main>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
