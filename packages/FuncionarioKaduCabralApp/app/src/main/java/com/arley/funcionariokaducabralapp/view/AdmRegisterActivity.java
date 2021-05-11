package com.arley.funcionariokaducabralapp.view;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Spinner;
import androidx.appcompat.app.AppCompatActivity;

import com.arley.funcionariokaducabralapp.R;
import com.arley.funcionariokaducabralapp.model.Const;
import com.arley.funcionariokaducabralapp.model.Employee;

public class AdmRegisterActivity extends AppCompatActivity {

    EditText edtName, edtEmail;
    Button btAdd;
    ProgressBar pg;
    Spinner spinner;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_adm_register);


        spinner = findViewById(R.id.activity_adm_register_spinner_type);
        edtName = findViewById(R.id.activity_adm_register_edt_name);
        edtEmail = findViewById(R.id.activity_adm_register_edt_email);
        pg = findViewById(R.id.activity_adm_register_pg);
        btAdd = findViewById(R.id.activity_adm_register_bt_adicionar);

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.tipoDeUsuario, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);

        spinner.getSelectedItem();
        spinner.getSelectedItemPosition();

        btAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email = edtEmail.getText().toString().trim();
                String name = edtName.getText().toString().trim();

                if (!email.isEmpty() && !name.isEmpty()){
                    Employee employee = new Employee();

                    employee.setEmail(email);
                    employee.setName(name);

                    switch (spinner.getSelectedItemPosition()){
                        case 0:
                            employee.setType(Const.EMPLOYEE);
                            break;
                        case 1:
                            employee.setType(Const.ADMIM);
                            break;
                    }
                    btAdd.setVisibility(View.INVISIBLE);
                    pg.setVisibility(View.VISIBLE);
                    createEmployeeAuth(employee);
                }

            }
        });

    }

    void createEmployeeAuth(Employee employee){
    }
}