const pageSchemas = {
    '/': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Superagentur – Ihr Partner für Online-Marketing!',
        "description": 'Als All-in-One-Werbeagentur steigern wir Ihre Sichtbarkeit und Erfolge auf allen Online-Kanälen – mit Search Ads, SEO, Social Media Ads & mehr.',
        "url": "https://superagentur.de/"
    },
    '/datenschutz-und-agbs': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Datenschutz & AGBs | Superagentur',
        "description": 'Erfahren Sie alles über unsere Datenschutzrichtlinien und AGBs – für eine transparente und vertrauensvolle Zusammenarbeit.',
        "url": "https://superagentur.de/datenschutz-und-agbs"
    },
    '/impressum': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Impressum | Superagentur',
        "description": 'Offizielle Informationen über Superagentur: Ansprechpartner, rechtliche Hinweise und Kontaktmöglichkeiten im Überblick.',
        "url": "https://superagentur.de/impressum"
    },
    '/kontakt': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Kontakt | Superagentur Marketing',
        "description": 'Kontaktieren Sie uns noch heute – Ihr Partner für digitales Wachstum, Online-Marketing und Recruiting steht bereit.',
        "url": "https://superagentur.de/kontakt"
    },
    '/dienstleistungen': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Übersicht Marketing Dienstleistungen | Superagentur',
        "description": 'Unsere Dienstleistungen im Überblick: SEO, Social Media Ads, E-Mail-Marketing und mehr – alles aus einer Hand.',
        "url": "https://superagentur.de/dienstleistungen"
    },
    '/danke-seite': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Danke für Ihre Anfrage | Superagentur',
        "description": 'Vielen Dank für Ihre Anfrage bei Superagentur! Entdecken Sie unsere Leistungen und starten Sie jetzt Ihren digitalen Erfolg.',
        "url": "https://superagentur.de/danke-seite"
    },

    // Services Pages
    '/sea-preise': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEA Preise | Superagentur',
        "description": 'Transparente Preise für gezielte Suchmaschinenwerbung, die Ihre Marke optimal positioniert und für mehr Klicks sorgt.',
        "url": "https://superagentur.de/sea-preise"
    },
    '/sea-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEA Basis Paket | Superagentur',
        "description": 'Einstiegslösungen für effektive Suchmaschinenwerbung, ideal für kleine Budgets mit maximalem Effekt.',
        "url": "https://superagentur.de/sea-basis"
    },
    '/sea-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEA Standard Paket | Superagentur',
        "description": 'Gezielte Suchmaschinenwerbung für mehr Reichweite, Klicks und Conversions – perfekt für wachsende Unternehmen.',
        "url": "https://superagentur.de/sea-standard"
    },
    '/sea-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEA Premium Paket | Superagentur',
        "description": 'High-End-Lösungen für Suchmaschinenwerbung, die Ihre Marke an die Spitze bringt und maximale Performance liefert.',
        "url": "https://superagentur.de/sea-premium"
    },

    '/seo-preise': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEO Preise | Superagentur',
        "description": 'Unsere SEO-Preise bieten faire und transparente Lösungen für nachhaltigen Erfolg in den Suchmaschinen.',
        "url": "https://superagentur.de/seo-preise"
    },
    '/seo-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEO Basis Paket | Superagentur',
        "description": 'Effektive Grundoptimierung für Ihre Website, um höhere Rankings und mehr Sichtbarkeit zu erzielen.',
        "url": "https://superagentur.de/seo-basis"
    },
    '/seo-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEO Standard Paket | Superagentur',
        "description": 'Professionelle SEO-Dienstleistungen für kontinuierliches Wachstum und steigende Reichweiten.',
        "url": "https://superagentur.de/seo-standard"
    },
    '/seo-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'SEO Premium Paket | Superagentur',
        "description": 'Spitzenoptimierung für maximale Suchmaschinen-Rankings und eine starke Online-Präsenz.',
        "url": "https://superagentur.de/seo-premium"
    },

    '/social-media-ads-preise': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Social Media Ads Preise | Superagentur',
        "description": 'Transparente Preise für gezielte Social Media Werbung, die Ihre Zielgruppe erreicht und Ihre Reichweite effektiv steigert.',
        "url": "https://superagentur.de/social-media-ads-preise"
    },
    '/social-media-ads-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Social Media Ads Basis Paket | Superagentur',
        "description": 'Social Media Ads für Einsteiger mit kleinem Budget – effiziente Lösungen für gezielte Kampagnen mit klarem Fokus.',
        "url": "https://superagentur.de/social-media-ads-basis"
    },
    '/social-media-ads-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Social Media Ads Standard Paket | Superagentur',
        "description": 'Social Media Ads für professionelle Kampagnen – erzielen Sie messbare Erfolge auf Facebook, Instagram und mehr.',
        "url": "https://superagentur.de/social-media-ads-standard"
    },
    '/social-media-ads-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Social Media Ads Premium Paket | Superagentur',
        "description": 'Social Media Ads für maximale Performance – strategische Lösungen für hohe Reichweite und optimale Ergebnisse.',
        "url": "https://superagentur.de/social-media-ads-premium"
    },

    '/email-marketing-preise': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'E-Mail-Marketing Preise | Superagentur',
        "description": 'Transparente Preise für E-Mail-Marketing – effektive Lösungen für Kundenbindung und Umsatzsteigerung, passend für jedes Budget.',
        "url": "https://superagentur.de/email-marketing-preise"
    },
    '/email-marketing-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'E-Mail-Marketing Basis Paket | Superagentur',
        "description": 'E-Mail-Marketing für Einsteiger – automatisierte Kampagnen für eine effektive und unkomplizierte Kundenkommunikation.',
        "url": "https://superagentur.de/email-marketing-basis"
    },
    '/email-marketing-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'E-Mail-Marketing Standard Paket | Superagentur',
        "description": 'E-Mail-Marketing für wachsendes Unternehmen – maßgeschneiderte Strategien, die Ihre Zielgruppe optimal erreichen.',
        "url": "https://superagentur.de/email-marketing-standard"
    },
    '/email-marketing-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'E-Mail-Marketing Premium Paket | Superagentur',
        "description": 'E-Mail-Marketing für maximale Performance – High-End-Lösungen mit vollständiger Automatisierung und Skalierbarkeit.',
        "url": "https://superagentur.de/email-marketing-premium"
    },

    '/websitefunnel-preise': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Website-Funnel Preise | Superagentur',
        "description": 'Klare Preise für optimierte Funnels, die Conversions steigern und Ihren Umsatz maximieren.',
        "url": "https://superagentur.de/websitefunnel-preise"
    },
    '/websitefunnel-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Website-Funnel Basis Paket | Superagentur',
        "description": 'Funnels für Einsteiger – funktionale Lösungen, die Ihre Leads in zahlende Kunden verwandeln.',
        "url": "https://superagentur.de/websitefunnel-basis"
    },
    '/websitefunnel-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Website-Funnel Standard Paket | Superagentur',
        "description": 'Funnels für wachsende Unternehmen – effektive Strategien, um Conversions zu maximieren.',
        "url": "https://superagentur.de/websitefunnel-standard"
    },
    '/websitefunnel-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Website-Funnel Premium Paket | Superagentur',
        "description": 'Funnels für maximale Umsätze – individuelle High-End-Lösungen für optimale Ergebnisse.',
        "url": "https://superagentur.de/websitefunnel-premium"
    },

    '/unternehmenslistung-preis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Unternehmenslistung Preis | Superagentur',
        "description": 'Google My Business Profile für maximale Sichtbarkeit – transparente Preise für Ihre Präsenz in relevanten Verzeichnissen.',
        "url": "https://superagentur.de/unternehmenslistung-preis"
    },
    '/unternehmenslistung-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Unternehmenslistung Premium Paket | Superagentur',
        "description": 'Google My Business Premium – Optimierte Einträge für höchste Präsenz auf lokalen und globalen Plattformen.',
        "url": "https://superagentur.de/unternehmenslistung-premium"
    },

    '/foto-und-videographie-preise': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Foto & Videographie Preise | Superagentur',
        "description": 'Klare Preise für hochwertige Foto- und Videoproduktionen, die Ihre Marke zum Strahlen bringen.',
        "url": "https://superagentur.de/foto-und-videographie-preise"
    },
    '/foto-und-videographie-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Foto & Videographie Basis Paket | Superagentur',
        "description": 'Perfekte Visuals für ansprechende und professionelle Markenauftritte – ideal für Einsteiger.',
        "url": "https://superagentur.de/foto-und-videographie-basis"
    },
    '/foto-und-videographie-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Foto & Videographie Standard Paket | Superagentur',
        "description": 'Hochwertige Medienproduktionen für Social Media, Websites und mehr – starke Inhalte für Ihr Marketing.',
        "url": "https://superagentur.de/foto-und-videographie-standard"
    },
    '/foto-und-videographie-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Foto & Videographie Premium Paket | Superagentur',
        "description": 'Premium-Medienproduktionen für beeindruckende Markenauftritte und maximale Wirkung.',
        "url": "https://superagentur.de/foto-und-videographie-premium"
    },

    '/analytics-aufsetzung-preis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Analytics-Aufsetzung Preis | Superagentur',
        "description": 'Transparente Preise für professionelle Analytics-Aufsetzung – Google Analytics, Tag Manager, Pixel und mehr.',
        "url": "https://superagentur.de/analytics-aufsetzung-preis"
    },
    '/analytics-aufsetzung-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Analytics-Aufsetzung Basis Paket | Superagentur',
        "description": 'Analytics-Aufsetzung für Einsteiger – Einrichtung von Google Analytics und Tag Manager für wichtige Einblicke.',
        "url": "https://superagentur.de/analytics-aufsetzung-basis"
    },
    '/analytics-aufsetzung-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Analytics-Aufsetzung Basis Paket | Superagentur',
        "description": 'Professionelle Analytics-Aufsetzung – Google Analytics, Tag Manager und Conversion-Tracking für datengesteuerte Entscheidungen.',
        "url": "https://superagentur.de/analytics-aufsetzung-standard"
    },
    '/analytics-aufsetzung-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Analytics-Aufsetzung Basis Paket | Superagentur',
        "description": 'High-End-Analytics – Tiefgehende Einrichtung von Google Analytics, Tag Manager und erweitertes Conversion-Tracking für maximale Einblicke.',
        "url": "https://superagentur.de/analytics-aufsetzung-premium"
    },

    '/marketing-ressourcen-preise': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Marketing-Ressourcen Preise | Superagentur',
        "description": 'Klare Preise für Marketing-Ressourcen – professionelle Grafiken für erfolgreiche Kampagnen.',
        "url": "https://superagentur.de/marketing-ressourcen-preise"
    },
    '/marketing-ressourcen-basis': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Marketing-Ressourcen Basis Paket | Superagentur',
        "description": 'Marketing-Ressourcen für den Start – effektive Grafiken und Inhalte für Ihre erste erfolgreiche Strategie.',
        "url": "https://superagentur.de/marketing-ressourcen-basis"
    },
    '/marketing-ressourcen-standard': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Marketing-Ressourcen Standard Paket | Superagentur',
        "description": 'Marketing-Ressourcen für Unternehmen – umfassende Lösungen für effiziente Kampagnen und Ergebnisse.',
        "url": "https://superagentur.de/marketing-ressourcen-standard"
    },
    '/marketing-ressourcen-premium': {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        "name": 'Marketing-Ressourcen Premium Paket | Superagentur',
        "description": 'Premium-Marketing-Ressourcen – hochwertige Grafiken, die Ihre Kampagnen auf das nächste Level bringen.',
        "url": "https://superagentur.de/marketing-ressourcen-premium"
    },
};

function getSchemaForPage(pathname) {
    return pageSchemas[pathname] || null;
  }