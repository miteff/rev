-- Clear existing data
DELETE FROM "Tag";
DELETE FROM "_ProjectToTag";

-- Landing Page Tags
INSERT INTO "Tag" (id, name, category, "projectType", "createdAt", "updatedAt") VALUES
-- Industry tags for landing pages
('tag-tech-landing', 'Technology', 'industry', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-finance-landing', 'Finance', 'industry', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-health-landing', 'Healthcare', 'industry', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-education-landing', 'Education', 'industry', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-retail-landing', 'Retail', 'industry', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Purpose tags for landing pages
('tag-product-landing', 'Product Launch', 'purpose', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-service-landing', 'Service Showcase', 'purpose', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-lead-landing', 'Lead Generation', 'purpose', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-event-landing', 'Event Registration', 'purpose', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Style tags for landing pages
('tag-modern-landing', 'Modern', 'style', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-minimal-landing', 'Minimal', 'style', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-bold-landing', 'Bold', 'style', 'landing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Mobile App Tags
INSERT INTO "Tag" (id, name, category, "projectType", "createdAt", "updatedAt") VALUES
-- Industry tags for mobile apps
('tag-social-mobile', 'Social Network', 'industry', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-fitness-mobile', 'Fitness & Health', 'industry', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-productivity-mobile', 'Productivity', 'industry', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-entertainment-mobile', 'Entertainment', 'industry', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Purpose tags for mobile apps
('tag-consumer-mobile', 'Consumer App', 'purpose', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-business-mobile', 'Business App', 'purpose', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-utility-mobile', 'Utility App', 'purpose', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Style tags for mobile apps
('tag-ios-mobile', 'iOS Style', 'style', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-material-mobile', 'Material Design', 'style', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-custom-mobile', 'Custom Style', 'style', 'mobile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Chatbot Tags
INSERT INTO "Tag" (id, name, category, "projectType", "createdAt", "updatedAt") VALUES
-- Industry tags for chatbots
('tag-support-chatbot', 'Customer Support', 'industry', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-sales-chatbot', 'Sales', 'industry', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-booking-chatbot', 'Booking & Reservations', 'industry', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-hr-chatbot', 'HR & Recruitment', 'industry', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Purpose tags for chatbots
('tag-faq-chatbot', 'FAQ Bot', 'purpose', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-lead-chatbot', 'Lead Generation', 'purpose', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-support-purpose-chatbot', 'Support Automation', 'purpose', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Style tags for chatbots
('tag-friendly-chatbot', 'Friendly', 'style', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-professional-chatbot', 'Professional', 'style', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-casual-chatbot', 'Casual', 'style', 'chatbot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Online Store Tags
INSERT INTO "Tag" (id, name, category, "projectType", "createdAt", "updatedAt") VALUES
-- Industry tags for stores
('tag-fashion-store', 'Fashion', 'industry', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-electronics-store', 'Electronics', 'industry', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-food-store', 'Food & Beverage', 'industry', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-digital-store', 'Digital Products', 'industry', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-handmade-store', 'Handmade & Crafts', 'industry', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Purpose tags for stores
('tag-b2c-store', 'B2C', 'purpose', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-b2b-store', 'B2B', 'purpose', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-marketplace-store', 'Marketplace', 'purpose', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-subscription-store', 'Subscription', 'purpose', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Style tags for stores
('tag-modern-store', 'Modern', 'style', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-minimal-store', 'Minimal', 'style', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-luxury-store', 'Luxury', 'style', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('tag-playful-store', 'Playful', 'style', 'store', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);