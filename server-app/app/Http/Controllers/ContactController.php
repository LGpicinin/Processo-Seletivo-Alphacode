<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all(); //fetch all contacts from DB
        return view('contact.list', ['contacts' => $contacts]);
    }

    public function create(){
        return view('contact.add');
    }

    public function store(Request $request){
        $newContact = Contact::create([
            'name' => $request['name'],
            'dateBirth' => $request['dateBirth'],
            'email' => $request['email'],
            'profission' => $request['profission'],
            'telephone' => $request['telephone'],
            'cell_phone' => $request['cell_phone']
        ]);

        return redirect('http://localhost:4200/');
    }

    public function edit(Contact $contact)
    {
        return view('contact.edit', [
            'contact' => $contact,
        ]);
    }

    public function update(Request $request, Contact $contact)
    {
        $contact->update([
            'name' => $request->name,
            'dateBirth' => $request->dateBirth,
            'email' => $request->email,
            'profission' => $request->profission,
            'telephone' => $request->telephone,
            'cell_phone' => $request->cell_phone
        ]);

        return redirect('product/' . $contact->id . '/edit');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect('contact/');
    }
}
