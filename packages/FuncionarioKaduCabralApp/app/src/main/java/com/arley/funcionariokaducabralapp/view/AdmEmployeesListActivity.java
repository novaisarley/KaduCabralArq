package com.arley.funcionariokaducabralapp.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.arley.funcionariokaducabralapp.R;
import com.arley.funcionariokaducabralapp.model.Const;
import com.arley.funcionariokaducabralapp.model.Employee;
import com.arley.funcionariokaducabralapp.viewholder.EmployeeViewHolder;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class AdmEmployeesListActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    FloatingActionButton fabAdd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_adm_employees_list);

        fabAdd = findViewById(R.id.activity_adm_employees_list_fab_add);
        recyclerView = findViewById(R.id.activity_adm_employees_list_rv);

        //PARTE DA RECYCLER VIEW
        /*holder.tvName.setText(employee.getName());
        holder.tvType.setText(employee.getType());

        if (employee.getType().equals(Const.ADMIM)){
            holder.vType.setBackgroundResource(R.drawable.yellow_round_marker);
        }else if(employee.getType().equals(Const.EMPLOYEE)){
            holder.vType.setBackgroundResource(R.drawable.gray_round_marker);
        }

        holder.ibDelete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });*/

        fabAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AdmEmployeesListActivity.this, AdmRegisterActivity.class));
            }
        });
    }
}