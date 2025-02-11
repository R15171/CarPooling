package com.RideShare.CarPool.Services;

import com.RideShare.CarPool.Entities.Role;
import com.RideShare.CarPool.Repositories.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public Optional<Role> findById(int roleId) {
        return roleRepository.findById(roleId);
    }
}
