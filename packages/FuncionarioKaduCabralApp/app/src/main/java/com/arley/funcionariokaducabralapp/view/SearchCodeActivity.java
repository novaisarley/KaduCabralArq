package com.arley.funcionariokaducabralapp.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.arley.funcionariokaducabralapp.R;
import com.arley.funcionariokaducabralapp.model.Const;
import com.arley.funcionariokaducabralapp.model.Employee;

public class SearchCodeActivity extends AppCompatActivity {

    EditText edtCode;
    ProgressBar pg;
    Button btSearch;
    ImageButton ibLogout, ibAdm;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search_code);

        edtCode = findViewById(R.id.activity_search_code_edt_code);
        pg = findViewById(R.id.activity_search_code_progress_bar_code);
        btSearch = findViewById(R.id.activity_search_code_bt_search);
        ibAdm = findViewById(R.id.activity_search_code_ib_adm);
        ibLogout = findViewById(R.id.activity_search_code_ib_logout);

        setElementsListeners();

    }

    private void setElementsListeners() {
        btSearch.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });

        ibLogout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /*Intent i = new Intent(SearchCodeActivity.this, LoginActivity.class);
                i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
                startActivity(i);*/
            }
        });
        ibAdm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
    }
}