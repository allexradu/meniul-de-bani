CREATE TABLE "contacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"address" varchar(1000) NOT NULL,
	"square_meters" integer NOT NULL,
	"product_id" varchar(50) NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"company_registration_number" varchar(50) NOT NULL,
	"marketing_consent" boolean DEFAULT false,
	"create_on" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"last_updated" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
