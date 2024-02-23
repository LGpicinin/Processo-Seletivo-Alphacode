<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Psy\Readline\Hoa\ConsoleWindow;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all(); //fetch all contacts from DB
        return response($contacts);
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

    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->update([
            'name' => $request->name,
            'dateBirth' => $request->dateBirth,
            'email' => $request->email,
            'profission' => $request->profission,
            'telephone' => $request->telephone,
            'cell_phone' => $request->cell_phone
        ]);

        return response($contact);
    }

    public function destroy($id)
    {
        $contact = Contact::find($id);

        $contact->delete();

        return response($contact);
    }
}
