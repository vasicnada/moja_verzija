<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\Planer;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::truncate();
        Category::truncate();
        
        $user = User::factory()->create();

        $cat1 = Category::create(['name'=>'veliki format']);
        $cat2 = Category::create(['name'=>'srednji format']);
        $cat3 = Category::create(['name'=>'mali format']);
        
        $planer1 = Planer::create([
            'name'=>'Standardni planer',
            'page_number'=>'200',
            'category_id'=>$cat1->id,
            'body'=>'Dvanaest meseci, dvanaest boja i dvanaest motivacionih ca za bolje planiranje. Sa kalendarom za dve godine, mesecnim i nedeljnim planerima za 12 meseci i stranama za beleske, bicete sigurni da nijedna obaveza nece biti zaboravljena.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/products/S34ne_1024x1024@2x.jpg?v=1603194973',
            'amount'=>0,
            'price'=>'2500din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);
       
        $planer2 = Planer::create([
            'name'=>'Biznis planer',
            'page_number'=>'100',
            'category_id'=>$cat2->id,
            'body'=>'Funkcionalnost, preglednost i sveden dizajn spojeni u ovaj rokovnik koji ce biti vas najbolji saradnik u narednih godinu dana. Rokovnik sadrzi kalendar za 2 godine, mesecne i nedeljne planere za 12 meseci i vise od 30 strana za beleske.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/files/standardni32ne_d67d6012-e279-49ee-b371-152535b6cfab_1024x1024@2x.jpg?v=1699527723',
            'amount'=>0,
            'price'=>'2500din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);

        $planer3 = Planer::create([
            'name'=>'Planer za vencanje',
            'page_number'=>'50',
            'category_id'=>$cat3->id,
            'body'=>'Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/products/vencanje3da_1024x1024@2x.jpg?v=1541440724',
            'amount'=>0,
            'price'=>'2500din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);

        $planer4 = Planer::create([
            'name'=>'Planer ishrane',
            'page_number'=>'100',
            'category_id'=>$cat1->id,
            'body'=>'Praktican i lagan planer za sve one koji planiraju obroke unapred, prate poseban rezim ishrane ili jednostavno uzivaju u kuvanju.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/products/planer-obroka7n_1024x1024@2x.jpg?v=1652436107',
            'amount'=>0,
            'price'=>'2500din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);

        $planer5 = Planer::create([
            'name'=>'Studentski planer',
            'page_number'=>'200',
            'category_id'=>$cat2->id,
            'body'=>'Za lakse i efikasnije zavrsavanje obaveza na faksu. Uz njega ces moci dobro da organizujes oba semestra, pripremis ispite i zavrsis sve obaveze na vreme.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/products/skolski16ne_900x.jpg?v=1660557467',
            'amount'=>0,
            'price'=>'2500din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);

    

        $planer6 = Planer::create([
            'name'=>'Mini planer',
            'page_number'=>'50',
            'category_id'=>$cat2->id,
            'body'=>'Praktičan i lagan rokovnik koji staje u svaku torbu. Sa kalendarom, stranama za određivanje najvažnijih ciljeva i obaveza i dovoljno mesta za beleške.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/products/skolski9ne_360x.jpg?v=1652448383',
            'amount'=>0,
            'price'=>'2000din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);

        $planer7 = Planer::create([
            'name'=>'Planer za putovanja',
            'page_number'=>'50',
            'category_id'=>$cat2->id,
            'body'=>'Planer za zaljubljenike u putovanja. Za lakse i efikasnije planiranje putovanja. Uz njega nijedna sitnica nece biti zaboravljena i preostaje Vam samo da uzivate.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/products/planer-putovanje2-n_360x.jpg?v=1652433318',
            'amount'=>0,
            'price'=>'2500din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);

        $planer8 = Planer::create([
            'name'=>'Goal-getter planer',
            'page_number'=>'100',
            'category_id'=>$cat2->id,
            'body'=>'Planer za one kojima je potrebno više strukture i motivacije za organizaciju vremena i ostvarivanje ciljeva. Ako često ne uradiš ono što je najvažnije, ovaj planer će ti pomoći da odrediš prioritete.',
            'user_id'=>$user->id,
            'image' => 'https://moj-rokovnik.myshopify.com/cdn/shop/products/skolski15ne_360x.jpg?v=1660557343',
            'amount'=>0,
            'price'=>'2500din',
            'size'=>'A4',
            'notes'=>'Zelim beleske',
            'stickers'=>'Zelim stikere',
        ]);
    }
}
